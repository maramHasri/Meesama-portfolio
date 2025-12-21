import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
        aria-label="Instagram"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
        aria-label="Twitter"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      </a>
      <a
        href="https://behance.net"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
        aria-label="Behance"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 7h-4M22 11h-4M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
          <rect x="2" y="6" width="12" height="12" rx="2"></rect>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;

