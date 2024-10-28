import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HomeIcon, BuildingOfficeIcon, Cog6ToothIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', href: '/admin/inicio', icon: HomeIcon },
  { name: 'Propiedades', href: '/admin/propiedades', icon: BuildingOfficeIcon, subItems: [
      { name: 'Agregar Propiedad', href: '/admin/propiedades/agregar' },
      { name: 'Subir Masivamente', href: '/admin/propiedades/subir-masivamente', icon: ArrowUpOnSquareIcon }
    ]
  },
  { name: 'Configuración', href: '/admin/configuracion', icon: Cog6ToothIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ user }) {
  const navigate = useNavigate();
  const location = useLocation(); // Para obtener la ruta actual

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Función para determinar si un enlace está "activo"
  const isActive = (href) => location.pathname.startsWith(href);

  // Verificar si el usuario y el agente existen, o usar una imagen predeterminada
  const agentImage = user?.agent?.profile_image_url || 'https://via.placeholder.com/40';

  // Agregar un log para verificar el contenido del objeto user y agent
  console.log('User:', user);
  console.log('Agent:', user?.agent);

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-blue-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">

                {/* Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <Link
                        to={item.href}
                        className={classNames(
                          isActive(item.href) ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-gray-200 hover:text-blue-800',
                          'flex items-center px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        <item.icon className="h-6 w-6 mr-2" />
                        {item.name}
                      </Link>

                      {/* Submenu for "Propiedades" */}
                      {item.subItems && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transform transition-all duration-150 ease-in-out origin-top">
                          {item.subItems.map(subItem => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                            >
                              {subItem.icon && <subItem.icon className="h-5 w-5 mr-2 inline" />}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification button */}
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={agentImage} // Imagen del agente obtenida del usuario autenticado
                        alt="Agent Profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-200' : '', 'block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-200 hover:text-blue-800')}
                          >
                            Cerrar sesión
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Disclosure.Button
                    as={Link}
                    to={item.href}
                    className={classNames(
                      isActive(item.href) ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-gray-200 hover:text-blue-800',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>

                  {/* Submenu items for mobile */}
                  {item.subItems && (
                    <Disclosure.Panel className="ml-4">
                      {item.subItems.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as={Link}
                          to={subItem.href}
                          className="block px-3 py-2 rounded-md text-sm text-blue-600 hover:bg-gray-200 hover:text-blue-800"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}