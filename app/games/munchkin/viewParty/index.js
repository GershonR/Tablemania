define(['knockout', 'durandal/app'], function (ko, app) {
    var itemToAdd = ko.observable("");
    var allItems = ko.observableArray(["You - Party Leader", "Mike", "Steve", "Bob"]);
    var selectedItems = ko.observableArray(["You - Party Leader"]);
	self.button1Visible = ko.observable(false);
    self.isDisabled = ko.observable(true);
	self.toggle1 =  function(){
			self.button1Visible(true);
			self.isDisabled(false);
		}

    return {
        itemToAdd: itemToAdd,
        allItems: allItems,
        selectedItems: selectedItems,
        addItem: function () {
            var value = itemToAdd();

            if (value != "" && allItems.indexOf(value) < 0){ // Prevent blanks and duplicates
                allItems.push(value);
            }

            itemToAdd(""); // Clear the text box
        },
        removeSelected: function () {
		    for(i=0;i<selectedItems().length;i++){
		    	if(selectedItems()[i].match("You - Party Leader")) {
		    		app.showMessage('You cannot remove yourself!');
					return;
		    	}
		    }
            allItems.removeAll(selectedItems());
            selectedItems([]); // Clear selection
        },
        sortItems: function () {
            allItems.sort();
        }
    }
});