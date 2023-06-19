const SocialLink = ({ icon, href, itemClass }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className={itemClass}
        rel="noreferrer"
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
