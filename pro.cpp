#include <iostream>
using namespace std;

int main() {
  char package;
  int minutesUsed;
  double totalAmount = 0.0;

  double packageA_rate = 39.99;
  int packageA_minutes = 450;
  double packageA_extraRate = 0.45;

  double packageB_rate = 59.99;
  int packageB_minutes = 900;
  double packageB_extraRate = 0.40;

  double packageC_rate = 69.99;

  cout << "Enter your package (A, B, or C): ";
  cin >> package;
  cout << "Enter the number of minutes used: ";
  cin >> minutesUsed;

  if (package == 'A') {
    if (minutesUsed > packageA_minutes) {
      totalAmount =
          packageA_rate + (minutesUsed - packageA_minutes) * packageA_extraRate;
    } else {
      totalAmount = packageA_rate;
    }
    cout << "Your total bill for Package A: " << totalAmount << endl;

    double packageB_cost = packageB_rate;
    if (minutesUsed > packageB_minutes) {
      packageB_cost += (minutesUsed - packageB_minutes) * packageB_extraRate;
    }
    double packageC_cost = packageC_rate;

    if (packageB_cost < totalAmount) {
      cout << "You could save $" << totalAmount - packageB_cost
           << " by switching to Package B." << endl;
    }
    if (packageC_cost < totalAmount) {
      cout << "You could save $" << totalAmount - packageC_cost
           << " by switching to Package C." << endl;
    }

  } else if (package == 'B') {
    if (minutesUsed > packageB_minutes) {
      totalAmount =
          packageB_rate + (minutesUsed - packageB_minutes) * packageB_extraRate;
    } else {
      totalAmount = packageB_rate;
    }
    cout << "Your total bill for Package B: $" << totalAmount << endl;

    if (packageC_rate < totalAmount) {
      cout << "You could save $" << totalAmount - packageC_rate
           << " by switching to Package C." << endl;
    }

  } else if (package == 'C') {
    totalAmount = packageC_rate;
    cout << "Your total bill for Package C: $" << totalAmount << endl;

  } else {

    cout << "Invalid package! Please enter A, B, or C." << endl;
  }
}
