
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
  	 <div className="container1">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Shop</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our products</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
          </div>
           <div className="footer-col">
           <h4>Copyright @2024</h4>
           <ul>

           <li><a className="copyr-a" href="https://portfolio-atanug123.vercel.app/">portfolio-atanug123.vercel.app/</a></li>
           {/* <li><a href="#"></a></li> */}
           </ul>
            </div>
  	 		</div>
  	 	</div>
  	
  </footer>
  );
}
