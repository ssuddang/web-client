'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import Title from '@/components/NoticePage/Title';

interface Notice {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    fetchNotices();
    checkUserRole();
  }, []);

  // ✅ 현재 로그인한 사용자의 역할(Role) 확인
  const checkUserRole = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();
      if (error) console.error('사용자 정보 불러오기 오류:', error);
      else setUserRole(data?.role || 'user');
    }
  };

  // ✅ 공지사항 불러오기 (Read)
  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('공지사항 불러오기 오류:', error);
    else setNotices(data || []);
  };

  // ✅ 공지사항 추가 (Create) (관리자만 가능)
  const addNotice = async () => {
    if (!title || !content) return alert('제목과 내용을 입력하세요.');
    if (userRole !== 'admin')
      return alert('관리자만 공지사항을 추가할 수 있습니다.');

    const { error } = await supabase
      .from('notices')
      .insert([{ title, content }]);
    if (error) console.error('공지사항 추가 오류:', error);

    setTitle('');
    setContent('');
    fetchNotices();
  };

  // ✅ 공지사항 수정 (Update) (관리자만 가능)
  const updateNotice = async (id: number) => {
    if (!title || !content) return alert('제목과 내용을 입력하세요.');
    if (userRole !== 'admin')
      return alert('관리자만 공지사항을 수정할 수 있습니다.');

    const { error } = await supabase
      .from('notices')
      .update({ title, content })
      .eq('id', id);
    if (error) console.error('공지사항 수정 오류:', error);

    setIsEditing(null);
    setTitle('');
    setContent('');
    fetchNotices();
  };

  // ✅ 공지사항 삭제 (Delete) (관리자만 가능)
  const deleteNotice = async (id: number) => {
    if (userRole !== 'admin')
      return alert('관리자만 공지사항을 삭제할 수 있습니다.');

    const { error } = await supabase.from('notices').delete().eq('id', id);
    if (error) console.error('공지사항 삭제 오류:', error);

    fetchNotices();
  };

  return (
    <div>
      <Title />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">공지사항</h1>
        {/* ✅ 관리자만 공지사항 추가 가능 */}
        {userRole === 'admin' && (
          <div className="mb-4 p-4 bg-gray-100 rounded">
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
            {isEditing ? (
              <button
                onClick={() => updateNotice(isEditing)}
                className="w-full p-2 bg-blue-500 text-white rounded"
              >
                공지사항 수정
              </button>
            ) : (
              <button
                onClick={addNotice}
                className="w-full p-2 bg-green-500 text-white rounded"
              >
                공지사항 추가
              </button>
            )}
          </div>
        )}

        {/* ✅ 공지사항 목록 */}
        <ul>
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="p-4 border-b flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold">{notice.title}</h2>
                <p className="text-gray-700">{notice.content}</p>
                <small className="text-gray-500">
                  {new Date(notice.created_at).toLocaleString()}
                </small>
              </div>

              {/* ✅ 관리자만 수정/삭제 버튼 표시 */}
              {userRole === 'admin' && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setIsEditing(notice.id);
                      setTitle(notice.title);
                      setContent(notice.content);
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteNotice(notice.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    삭제
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
