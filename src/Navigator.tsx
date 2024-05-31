import { Link } from 'react-router-dom';

const NAVIGATORS = [
  {
    name: 'Stopwatch',
    link: '/stopwatch',
  },
];

const Navigator = () => (
  <div>
    <ul>
      {NAVIGATORS.map((n) => (
        <Link to={n.link} key={n.name}>
          <li>{n.name}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default Navigator;
