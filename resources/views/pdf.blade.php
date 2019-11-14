
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>{{ config('app.name', 'Laravel') }}</title>

	<!-- Scripts -->
	{{-- <script src="{{ p_asset('js/app.js') }}" defer></script> --}}

	<!-- Fonts -->
	<link rel="dns-prefetch" href="//fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
	<link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">
	{{-- <script src="https://js.braintreegateway.com/web/dropin/1.20.4/js/dropin.min.js"></script> --}}



	<!-- Styles -->
	<link href="{{ p_asset('css/b3.css') }}" rel="stylesheet">
	{{-- <link href="{{ p_asset('css/pizzaapp.css') }}" rel="stylesheet"> --}}
	<style>
		.text-right {
			text-align: right;
		}
		
		hr {
			border-color: #EEEEEE ;
			border-style: solid none;
			/* border-width: 1px 0; */
			margin: 18px 0;
			width: 100%;
		}
		header{
			display: block;
		}
		
		.logo::after{
			content:"";
			background: url(<?php echo p_asset('storage/logo.png') ?>) no-repeat center center;
			position: absolute;
			top:0px;
			left: 0px;
			width:100%;
			height:100%;
			z-index:-1;
			opacity: 0.3;
			transform: rotate(-45deg);
		}
		sup,.caps{
			text-transform: uppercase;
			
		}
		.caps{
			font-weight: 600;
		}
		sup{
			font-size: .8rem;
			font-weight: 600;
		}
		.float-right{
			float: right;
		}
	</style>
</head>

<body>
		<div class="logo">
			<div class="row">
				<div class="col-xs-7">
					
					<div class="h5 caps">Local Man Pizzeria</div>
					<div>15<sup>th</sup> Harambee Avenue</div>
					<div>P.O.BOX 1600 - 00100</div>
					<div><b>NAIROBI</b></div>
				</div>
	
				<div class="col-xs-4">
					<img src="<?php echo p_asset('storage/logo.png') ?>" alt="logo">
				</div>
			</div>
			<div class="row">
				<div class='col-xs-12 '>
						
					<h2 class="h2 text-center">
						Order  Receipt
					</h2>
				</div>
			</div>
			<div style="margin-bottom: 0px">&nbsp;</div>
	
			<div class="row">
				<div class="col-xs-6">
					<h4>To:</h4>
					<address>
						<strong>{{$orderDetails->name}}</strong><br>
						<span>{{$orderDetails->address}}</span><br>
						<span>{{$orderDetails->email}}</span> <br>
						<span>{{$orderDetails->phone}}</span>
					</address>
				</div>
	
				<div class="col-xs-5">
					<table style="width: 100%">
						<tbody>
							<tr>
								<th>Receipt Num:</th>
								<td class="text-right"><span class="text-success caps">{{$orderDetails->transaction_id}}</span></td>
							</tr>
							<tr>
								<th>Date:</th>
								<td class="text-right">{{$orderDetails->placed_at}}</td>
							</tr>
							<tr>
								<th>Order Number:</th>
								<td class="text-right caps text-success">{{$orderId}} </td>
							</tr>
						</tbody>
					</table>
	
					<div style="margin-bottom: 0px">&nbsp;</div>
	
					
				</div>
			</div>
	
			<table class="table">
				<thead style="background: #777;color: #fff;">
					<tr>
						<th>Item List</th>
						<th>Description</th>
						<th>Qty</th>
						<th class="text-right">Price</th>
					</tr>
				</thead>
				<tbody>
					
						<tr>
							<td>
								<div><strong>{{$orderDetails->order->pizza->name}}</strong></div>
								
							</td>
							<td>{{$orderDetails->order->pizza->badge}}</td>
							<td>{{$orderDetails->order->pizza->qty}}</td>
							<td class="text-right">{{$orderDetails->order->pizza->price}}</td>
						</tr>
					@if ($orderDetails->order->drinks)
						@foreach ($orderDetails->order->drinks as $item)
							<tr>
								<td>
									<div><strong>{{$item->name}}</strong></div>
									
								</td>
								<td>{{$item->badge}}</td>
								<td>{{$item->qty ?? 1}}</td>
								<td class="text-right">{{$item->price}}</td>
							</tr>
						@endforeach
						
					@endif
					@if ($orderDetails->order->toppings)
						@foreach ($orderDetails->order->toppings as $item)
							<tr>
								<td>
									<div><strong>{{$item->name}}</strong></div>
									
								</td>
								<td>{{$item->badge}}</td>
								<td>{{$item->qty??  1}}</td>
								<td class="text-right">{{$item->price}}</td>
							</tr>
						@endforeach
						
					@endif
					
					
			</table>
	
			<div class="row">
				<div class="col-xs-6"></div>
				<div class="col-xs-5">
					<table style="width: 100%">
						<tbody>
							<tr style="padding: 5px">
								<th style="padding: 5px">
									<div> Total Paid </div>
								</th>
								<td style="padding: 5px" class="text-right"><strong> {{$orderDetails->total}}</strong></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	
			<div style="margin-bottom: 0px">&nbsp;</div>
	
			
			<div class="row">
				<div class='col-xs-12 text-center'>
					<b>Thank You</b>
				</div>
			</div>
			<div style="margin-bottom: 0px;border-bottom:1px solid #EEE">&nbsp;</div>
		</div>
		
	</body>

</html>