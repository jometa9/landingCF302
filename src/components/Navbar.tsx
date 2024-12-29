import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BarChart2, LogIn, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/ui/nav-link';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-2 sm:px-4">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-6">
                <Link to="/" className="flex items-center space-x-2">
                  <BarChart2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="font-bold text-sm sm:text-base">TradePro</span>
                </Link>
                
                <nav className="hidden sm:flex items-center space-x-2">
                  {isAuthenticated && (
                    <>
                      <NavLink 
                        to="/dashboard" 
                        active={location.pathname === '/dashboard'}
                      >
                        Dashboard
                      </NavLink>
                      <NavLink 
                        to="/trading" 
                        active={location.pathname === '/trading'}
                      >
                        Trading
                      </NavLink>
                    </>
                  )}
                </nav>
              </div>

              <div className="flex items-center gap-2">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-medium">
                        {user?.address?.[0].toUpperCase()}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={logout}
                      className="hidden sm:inline-flex text-muted-foreground hover:text-foreground"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => navigate('/login')} variant="default" size="sm" className="sm:size-default">
                    <LogIn className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Login</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && isAuthenticated && (
            <div className="sm:hidden border-t px-2 py-3">
              <nav className="flex flex-col space-y-2">
                <NavLink 
                  to="/dashboard" 
                  active={location.pathname === '/dashboard'}
                  className="w-full"
                >
                  Dashboard
                </NavLink>
                <NavLink 
                  to="/trading" 
                  active={location.pathname === '/trading'}
                  className="w-full"
                >
                  Trading
                </NavLink>
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  Logout
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;