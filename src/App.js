import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarEc from './components/utility/NavBarEc';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import CartPage from './pages/Cart/CartPage';
import AllCategoryPage from './pages/category/AllCategoryPage';
import ShopProducts from './pages/Products/ShopProducts';
import AllBrandPage from './pages/Brand/AllBrandPage';
import Footer from './components/utility/Footer';
import ChoosePayMethoudPage from './pages/CheckOut/ChoosePayMethoudPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AdminAllProductsPage from './pages/Admin/AdminAllProductsPage';
// import UserAllOrdersPage from './pages/User/UserAllOrdersPage';
import AdminAllOrderspage from './pages/Admin/AdminAllOrderspage';
import AdminAddBrandPage from './pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
import AdminOrderDetailPge from './pages/Admin/AdminOrderDetailPge';
import ProductDetailPage from './pages/Products/ProductDetailPage';
import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage';
import UserAllOrdersPage from './pages/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './pages/User/UserFavoriteProductsPage';
import UserAllAddresPage from './pages/User/UserAllAddresPage';
import UserAddAddressPage from './pages/User/UserAddAddressPage';
import UserEditAddressPage from './pages/User/UserEditAddressPage';
import UserProfilePage from './pages/User/UserProfilePage';

function App() {
  return (
<>
<NavBarEc />
<BrowserRouter>
<Routes>
  <Route path = '/' element={<HomePage/>}/>
  <Route path = '/login' element={<LoginPage/>}/>
  <Route path = '/register' element={<RegisterPage/>}/>
  <Route path = '/forgetPassword' element={<ForgetPasswordPage/>}/>
  <Route path = '/cart' element={<CartPage/>}/>
  <Route path = '/allCategory' element={<AllCategoryPage/>}/>
  <Route path = '/products' element={<ShopProducts/>}/>
  <Route path = '/products/:id' element={<ProductDetailPage/>}/>
  <Route path = '/allBrand' element={<AllBrandPage/>}/>
  <Route path = '/order/payMethoud' element={<ChoosePayMethoudPage/>}/>
  <Route path = '/admin/allProducts' element={<AdminAllProductsPage/>}/>
  <Route path = '/admin/allOrders' element={<AdminAllOrderspage/>}/>
  <Route path = '/admin/addBrand' element={<AdminAddBrandPage/>}/>
  <Route path = '/admin/addCategory' element={<AdminAddCategoryPage/>}/>
  <Route path = '/admin/addSubCategory' element={<AdminAddSubCategoryPage/>}/>
  <Route path = '/admin/addProduct' element={<AdminAddProductPage/>}/>
  <Route path = '/admin/editProduct/:id' element={<AdminEditProductPage/>}/>
  <Route path = '/admin/orders/20' element={<AdminOrderDetailPge/>}/>
  {/* <Route path = '/user/allOrders' element={<UserAllOrdersPage/>}/> */}
  <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
          <Route path="/user/profile" element={<UserProfilePage />} />  
</Routes>
</BrowserRouter>
<Footer/>

</>
  );
}

export default App;
