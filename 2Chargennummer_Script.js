var myDialog = app.dialogs.add({name:"Chargennummer Eingabe"});
//Add a dialog column.
with(myDialog.dialogColumns.add()){
  staticTexts.add({staticLabel:"Chargennummer 1:"});
  staticTexts.add({staticLabel:"Chargennummer 2:"});
  staticTexts.add({staticLabel:"Artikel-Nr:"});
  staticTexts.add({staticLabel:"Produktname:"});
  staticTexts.add({staticLabel:"Ankunft Datum:"});
}
with(myDialog.dialogColumns.add()){
  var Chargennummer1 = textEditboxes.add({minWidth:100});
  var Chargennummer2 = textEditboxes.add({minWidth:100});
  var Artikel_Nr = textEditboxes.add({minWidth:100});
  var Produktname = textEditboxes.add({minWidth:100});
  var Datum = textEditboxes.add({editContents:"TT.MM.YYYY"},{minWidth:100});
}
//Show the dialog box.
var myResult = myDialog.show();
//If the user clicked OK, display one message;
//if they clicked Cancel, display a different message.
if(myResult == true){
alert("Chargennummer " + Chargennummer1.editContents + " "
 + Chargennummer2.editContents + ",Artikel-Nr. " +
 Artikel_Nr.editContents + " und Produkt Name " + Produktname.editContents +
 " wurde eingegeben.");


//Remove the dialog box from memory.


//Show the dialog box.

var myDocument = app.activeDocument;
//Clear the find/change text preferences.
  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;
//Set the find options.
//Search the document for the string "copy" and change it to "text".
    app.findTextPreferences.findWhat = "Chargennummer1";
    app.changeTextPreferences.changeTo = Chargennummer1.editContents;

  myDocument.changeText();
//Clear the find/change text preferences after the search.


  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;

    app.findTextPreferences.findWhat = "Chargennummer2";
    app.changeTextPreferences.changeTo = Chargennummer2.editContents;

  myDocument.changeText();


  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;

    app.findTextPreferences.findWhat = "Artikel-Nr";
    app.changeTextPreferences.changeTo = Artikel_Nr.editContents;

  myDocument.changeText();

  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;

    app.findTextPreferences.findWhat = "Produkt Name";
    app.changeTextPreferences.changeTo = Produktname.editContents;

  myDocument.changeText();

  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;

    app.findTextPreferences.findWhat = "Datum";
    app.changeTextPreferences.changeTo = Datum.editContents;

  myDocument.changeText();

  app.findTextPreferences = NothingEnum.nothing;
  app.changeTextPreferences = NothingEnum.nothing;
}
else{
    alert("Der Prozess wurde gecancelt.")
}
myDialog.destroy();
