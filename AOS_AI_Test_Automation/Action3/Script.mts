AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("POPULAR ITEMS").Click
AIUtil.FindTextBlock("HP ROAR PLUS WIRELESS SPEAKER").Click
AIUtil("right_triangle", micAnyText, micFromRight, 1).Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil.FindTextBlock("CHECKOUT ($169.99)", micFromTop, 1).Click
AIUtil.FindTextBlock("NEXT").Click
'AIUtil("input", "SafePay username").Type "Keith"
AIUtil.FindTextBlock("SafePay password").Click
'AIUtil("input", "SafePay password").Type "Password1"'
AIUtil.FindTextBlock("PAY NOW").Click
