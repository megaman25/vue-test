/*
CREATED: Thursday, May 23, 2024, 10:25:09 AM
MODIFIED: Thursday, May 23, 2024, 11:16:02 AM - nothing done. Just returned to file to write notes.
RESUMED: Friday, August 9, 2024, 11:28:56 AM - Resumed working on libary after basic code was establish months earlier.


	// library is to sort and consolidate all activity related items into a single library file including but not limited to DOM manipulation
	• Take activity database and make useful for app (sorting, grouping into categories)
	• Used in conjunction with backend to create helper files or pre-indexing files.


	removeDuplicates - removed duplicate location names from activities data.

	addObjects - Uses array from removeDuplicates. Creates an array to have the properties of ('day' = index day of week i.e. 0-6 ; 'idx' = array of indexes found in activities database for each location)

	pointer - is a helper function that compairs a string against the indexes of an array searching for a matching pair. If match found then the corresponding index number within that array is returned.

	- addObjects against activities database

	daySelector - calendar dates, based upon user input, used to check availability of activities on specific days and times. The results are grouped into days. The days correspond to the number of days selected by user.

*/


let activities_itinerary_library = { // initially set up to be a singleton
};


/*
count number of ways javascript can be inserted into HTML document.
count number of ways a function can be called.
How do YOU normally use libraries? (the question changes your frame of mind and perspective @3:42pm)
	*Relate the issue to something you already do.
	• Use them directly in the header or body of HTML document? So how would you make that? You already know. YOu've seen the examples. So what are you searching for? How to place it into vue js? You already know how to do that. You've aldready done it multiple times. So what are you looking for? WHat's your mental block? Me typing this helps. Shows my train of thought. Sitting on the answers the whole while. Ask the right questions, get the right frame of mind.
	• Anchor the thoughts to something you can relate to. Something that exists and familiar with.
	• Ask have you done that before? If so then do it again. If not, then learn how.
*/