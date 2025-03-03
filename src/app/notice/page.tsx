'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import Title from '@/components/NoticePage/Title';
import { User } from '@supabase/auth-js';

interface Notice {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchNotices();
    checkUserLogin();
  }, []);

  const checkUserLogin = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error('사용자 세션 가져오기 오류:', error.message);
      return;
    }

    setUser(session?.user || null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  };

  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('공지사항 불러오기 오류:', error.message);
      return;
    }

    setNotices([...data]);
  };

  const addNotice = async () => {
    if (!title || !content) return alert('제목과 내용을 입력하세요.');
    if (!user) return alert('로그인해야 공지사항을 추가할 수 있습니다.');

    const { error } = await supabase
      .from('notices')
      .insert([{ title, content, user_id: user.id }]);

    if (error) {
      console.error('공지사항 추가 오류:', error.message);
      return;
    }

    setTitle('');
    setContent('');
    setShowForm(false);
    await fetchNotices();
  };

  const updateNotice = async () => {
    if (!selectedNotice) return;
    if (!user) return alert('로그인해야 공지사항을 수정할 수 있습니다.');

    const { error } = await supabase
      .from('notices')
      .update({ title, content })
      .eq('id', selectedNotice.id);

    if (error) {
      console.error('공지사항 수정 오류:', error.message);
      return;
    }

    setSelectedNotice(null);
    setShowEditForm(false);
    setTitle('');
    setContent('');
    fetchNotices();
  };

  const deleteNotice = async (id: number) => {
    if (!user) return alert('로그인해야 공지사항을 삭제할 수 있습니다.');

    const { error } = await supabase.from('notices').delete().eq('id', id);

    if (error) {
      console.error('공지사항 삭제 오류:', error.message);
      return;
    }

    setSelectedNotice(null);
    fetchNotices();
  };

  const handleSelectNotice = (notice: Notice) => {
    setSelectedNotice((prev) => (prev?.id === notice.id ? null : notice));
  };

  const handleEdit = (notice: Notice) => {
    setSelectedNotice(notice);
    setTitle(notice.title);
    setContent(notice.content);
    setShowEditForm(true);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowEditForm(false);
    setSelectedNotice(null);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Title />
      <div className="max-w-3xl mx-auto p-6 mb-[100px] h-full">
        <div className="flex lg:justify-between px-[30px] font-bold text-[20px] mb-[10px] mt-[15px]">
          <div className="pr-[40px] lg:pr-0">No.</div>
          <div>제목</div>
          <div className="hidden lg:block">작성일</div>
        </div>
        <hr className="w-full border-t border-black" />
        <ul>
          {notices.map((notice, index) => (
            <div key={notice.id}>
              <li
                className="py-4 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectNotice(notice)}
              >
                <div className="flex lg:justify-between pl-[40px] pr-[25px]">
                  <span className="font-bold pr-[50px] lg:pr-0">
                    {index + 1}
                  </span>
                  <span>{notice.title}</span>
                  <small className="text-gray-500 hidden lg:block">
                    {new Date(notice.created_at).toLocaleDateString()}
                  </small>
                </div>
              </li>
              {selectedNotice?.id === notice.id && (
                <div className="p-6 bg-gray-50 border-b">
                  <p className="text-gray-700 mb-[20px]">
                    {selectedNotice.content}
                  </p>
                  <small className="text-gray-500">
                    {new Date(selectedNotice.created_at).toLocaleString()}
                  </small>

                  {user && (
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={() => handleEdit(selectedNotice)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => deleteNotice(selectedNotice.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </ul>

        {user && !showForm && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              작성하기
            </button>
          </div>
        )}

        {(showForm || showEditForm) && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[800px] h-[500px]">
              <h2 className="text-xl font-bold mb-4">
                {showEditForm ? '공지사항 수정' : '공지사항 작성'}
              </h2>
              <input
                type="text"
                placeholder="제목"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="내용"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleCancel}
                  className="py-2 px-4 bg-gray-400 text-white rounded"
                >
                  취소
                </button>
                <button
                  onClick={showEditForm ? updateNotice : addNotice}
                  className="py-2 px-4 bg-blue-500 text-white rounded"
                >
                  {showEditForm ? '수정 완료' : '작성 완료'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
