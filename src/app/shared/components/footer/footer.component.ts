import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <!-- Remove the container if you want to extend the Footer to full width. -->
<div class=" mt-1">
  <!-- Footer -->
  <footer
          class="text-center text-lg-start text-white"
          style="background-color:#6c757d"
          >
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4" style="color: black;">
            <h5 class="text-uppercase mb-4 font-weight-bold" >
              THE BOOK SPOT
            </h5>
            <h6>About Us</h6>
            <p>
              One of the best stores from where you can buy books online.we embody everything you love about your favourite local bookshop,
               perfected for your modern life. Our mission is to bring the power of reading to your world.
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" >
            <h6 class="text-uppercase mb-4 font-weight-bold" style="color: black;">Links</h6>
            <app-menu>
            <!-- <div id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                  <li class="nav-item">
                    <a class="nav-link active"  routerLinkActive="active" routerLink="/">Go to top</a>
                  </li>  
                </ul>    
            </div> -->
     </app-menu>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" style="color: black;">
            <h6 class="text-uppercase mb-4 font-weight-bold" style="color: black;">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> bookspot@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2021 Copyright:The Book Spot

    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->
 
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

