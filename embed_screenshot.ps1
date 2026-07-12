Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("E:\chromium\screenshots\screenshot.png")
$bmp = New-Object System.Drawing.Bitmap($img)
$bmp.Save("E:\chromium\tmp.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
$bmp.Dispose()

$data = [System.IO.File]::ReadAllBytes("E:\chromium\tmp.jpg")
$b64 = [Convert]::ToBase64String($data)
Remove-Item "E:\chromium\tmp.jpg"

$readme = [System.IO.File]::ReadAllText("E:\chromium\README.md")
$old = '![截图](data:image/jpeg;base64,)'
$new = '![截图](data:image/jpeg;base64,' + $b64 + ')'
$readme = $readme.Replace($old, $new)
[System.IO.File]::WriteAllText("E:\chromium\README.md", $readme)

Remove-Item -Recurse -Force "E:\chromium\screenshots"

Write-Output ("Done: " + $readme.Length + " bytes")
