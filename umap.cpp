//to store a freq of a number
#include<iostream>
#include<unordered_map>
#include<vector>
using namespace std;
int main(){
    unordered_map<int,int> mp;
   
   //example data
    vector<int> nums ={0,1,2,3,2,1,4,2,5,1,3};
  //count the freq of each number
  for(int num:nums){
    mp[num]++;
  }
//print the freq of each number
for(const auto&it :mp){
    cout<< "Number" << it.first <<" " << "Freq " << " " << it.second << endl;
}
}