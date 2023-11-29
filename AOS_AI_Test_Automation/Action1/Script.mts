Function startBrowser
	
End Function
Call startBrowser

AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil("input", "Username").Type "Keith"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "LOGIN").Click
