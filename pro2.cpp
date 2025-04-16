#include <iostream>
using namespace std;
int main() {

  int maxMinutes;
  string month;

  cout << "Enter the month name ";
  cin >> month;

  if (month == "January" || month == "March" || month == "May" ||
      month == "July" || month == "August" || month == "October" ||
      month == "December") {
    maxMinutes = 744 * 60;
  }

  else if (month == "April" || month == "June" || month == "September" ||
           month == "November") {
    maxMinutes = 720 * 60;
  } else if (month == "February") {
    maxMinutes = 672 * 60;
  } else
    cout << "Invalid month entered!" << endl;

  // If(maxMinutes < userMin) {
  //   cout << "Minutes is more then max Minutes of month you entered"
  // } ya tub chla jub tu userMinutes ko initialize krai ga jub tu 4 or 5 ka
  // sath use kra ga tub ya chla ga
}
