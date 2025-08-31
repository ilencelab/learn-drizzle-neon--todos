type DropdownProps = {
  children: React.ReactNode;
};

export function Dropdown({ children }: DropdownProps) {
  return (
    <details className="relative inline-block">
      <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded px-2 py-1 select-none hover:bg-gray-100">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle cx="4" cy="10" r="1.5" fill="currentColor" />
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          <circle cx="16" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </summary>
      <div className="absolute right-0 z-10 w-[160px] rounded bg-white p-1 shadow">
        {children}
      </div>
    </details>
  );
}
