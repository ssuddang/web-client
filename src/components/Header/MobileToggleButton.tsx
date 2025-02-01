interface MobileToggleButtonProps {
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
}

function MobileToggleButton({
  isMobileOpen,
  toggleMobileMenu,
}: MobileToggleButtonProps) {
  return (
    <button
      className="sidebar-btn md:hidden relative w-10 h-10"
      onClick={toggleMobileMenu}
    >
      <span
        className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
          isMobileOpen ? 'rotate-45 top-4' : 'top-3'
        }`}
      ></span>
      <span
        className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
          isMobileOpen ? 'opacity-0' : 'top-4'
        }`}
      ></span>
      <span
        className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
          isMobileOpen ? '-rotate-45 top-4' : 'top-5'
        }`}
      ></span>
    </button>
  );
}

export default MobileToggleButton;
