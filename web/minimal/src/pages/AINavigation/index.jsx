/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React, { useEffect } from 'react';
import AINavigation from '../Home/AINavigation';
import '../Home/home.css';

const AINavigationPage = () => {
  useEffect(() => {
    document.body.classList.add('minimal-home-route');
    return () => {
      document.body.classList.remove('minimal-home-route');
    };
  }, []);

  return (
    <main className='minimal-home minimal-home--navigation-page'>
      <AINavigation />
    </main>
  );
};

export default AINavigationPage;
