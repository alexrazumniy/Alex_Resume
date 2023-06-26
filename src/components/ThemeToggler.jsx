const Toggle = ({ value, onChange }) => (
  <label className="switch" htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className="slider" />
    <span className="wave" />
  </label>
);

export default Toggle;
