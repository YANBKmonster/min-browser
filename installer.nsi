!include "MUI2.nsh"

Name "MinBrowser"
OutFile "dist\MinBrowser-1.0.0-Setup.exe"
InstallDir "$PROGRAMFILES64\MinBrowser"
RequestExecutionLevel admin

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_LANGUAGE "SimpChinese"

Section "Install"
  SetOutPath "$INSTDIR"
  File /r "dist\win-unpacked\*.*"
  CreateShortCut "$DESKTOP\MinBrowser.lnk" "$INSTDIR\MinBrowser.exe"
  CreateDirectory "$SMPROGRAMS\MinBrowser"
  CreateShortCut "$SMPROGRAMS\MinBrowser\MinBrowser.lnk" "$INSTDIR\MinBrowser.exe"
  CreateShortCut "$SMPROGRAMS\MinBrowser\Uninstall.lnk" "$INSTDIR\uninstall.exe"
  WriteUninstaller "$INSTDIR\uninstall.exe"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\MinBrowser" "DisplayName" "MinBrowser"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\MinBrowser" "UninstallString" "$INSTDIR\uninstall.exe"
SectionEnd

Section "Uninstall"
  RMDir /r "$INSTDIR"
  Delete "$DESKTOP\MinBrowser.lnk"
  RMDir /r "$SMPROGRAMS\MinBrowser"
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\MinBrowser"
SectionEnd
