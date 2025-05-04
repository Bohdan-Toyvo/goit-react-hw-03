import css from './SearchBox.module.css';

export default function SearchBox({value, onChange}) { return (
    <div className={css.searchBox}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        name="name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );}
