import { LogoEner } from '../../Icons';
import { ButtonLanding} from '../../components';



const HeaderLanding = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-indigo-600 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <LogoEner />
          <span className="self-center uppercase text-5xl font-bold whitespace-nowrap dark:text-white">
            Energy
          </span>

          <div className="flex md:order-2">
            <ButtonLanding text="Iniciar Sesión" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderLanding