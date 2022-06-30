import './Banner.css';

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__shoe" />
      <div className="banner__dimming" />
      <div className="banner__tagline" />
      <div className="banner__rigth-background">
        <div className="banner__text" />
        <div className="banner__text-part2" />
        <button
          type="button"
          className="banner__button"
        >
          shop now
        </button>
      </div>
      <div className="banner__spiral" />
      <div className="banner__logo" />
    </div>
  )
}