<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Invoice</title>
    <link rel="stylesheet" href="{{p_asset('css/b3.css')}}" >
    <style>
        .page-break {
            page-break-after: always;
        }

        .bg-grey {
            background: #F3F3F3;
        }

        .text-right {
            text-align: right;
        }

        .w-full {
            width: 100%;
        }

        .small-width {
            width: 15%;
        }

        .invoice {
            background: white;
            border: 1px solid #CCC;
            font-size: 14px;
            padding: 48px;
            margin: 20px 0;
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
    </style>
</head>

<body class="bg-grey">

    <div class="container container-smaller">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1" style="margin-top:20px; text-align: right">
                <div class="btn-group mb-4">
                    <a href="{{$downloadLink}}" class="btn btn-primary btn-sm">Download as PDF</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="invoice">
                    <div class="row">
                        <div class="col-sm-6">
                                <div class="h5 caps">Local Man Pizzeria</div>
                                <div>15<sup>th</sup> Harambee Avenue</div>
                                <div>P.O.BOX 1600 - 00100</div>
                                <div><b>NAIROBI</b></div>
                        </div>

                        <div class="col-sm-6 text-right">
                            <img src="<?php echo p_asset('storage/logo.png') ?>" alt="logo">
                        </div>
                    </div>
                    <div class="row">
                        <div class='col-xs-12 '>

                            <h2 class="h2 text-center">
                                Order Receipt
                            </h2>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-sm-7">
                            <h4>To:</h4>
                            <address>
                                <strong>{{$orderDetails->name}}</strong><br>
                                <span>{{$orderDetails->address}}</span><br>
                                <span>{{$orderDetails->email}}</span> <br>
                                <span>{{$orderDetails->phone}}</span>
                            </address>
                        </div>

                        <div class="col-sm-5 text-right">
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

                    <div class="table-responsive">
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
                                        @if (isset($orderDetails->order->drinks))
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
                                        @if (isset($orderDetails->order->toppings))
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
                    </div><!-- /table-responsive -->

                    <table class="table invoice-total">
                        <tbody>
                                <tr style="padding: 5px">
                                        <th style="padding: 5px">
                                            <div> Total Paid </div>
                                        </th>
                                        <td style="padding: 5px" class="text-right"><strong> {{$orderDetails->total}}</strong></td>
                                    </tr>
                        </tbody>
                    </table>

                    <hr>
                    
                    <div class="row">
                        <div class='col-xs-12 text-center'>
                            <b>Thank You</b>
                        </div>
                    </div>
                    <div style="margin-bottom: 0px;border-bottom:1px solid #EEE">&nbsp;</div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>