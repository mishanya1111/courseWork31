import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={`/`}
                            end
                            className={({ isActive, isPending }) =>
                                isActive ? 'active' : isPending ? 'pending' : ''
                            }
                        >
                            Основные дела
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/hidden`}
                            className={({ isActive, isPending }) =>
                                isActive ? 'active' : isPending ? 'pending' : ''
                            }
                        >
                            Спрятанаые дела дела
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
