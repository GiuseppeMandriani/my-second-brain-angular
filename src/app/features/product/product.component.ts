import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export default class ProductComponent {
  // productId: string | undefined;

  @Input() productId: string | undefined;  // get route params: product/[productID]

  constructor(private activateRoute: ActivatedRoute) {
    // console.log(this.activateRoute.snapshot.params['productId'])

    // this.activateRoute.params.subscribe(params => {
    //   console.log(params)
    //   this.productId = params['productId']
    // })
  }

}
