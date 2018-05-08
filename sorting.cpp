//Bharath 108117021
#include<iostream>
using namespace std;

main(){
	int *a,i,j,tmp,n,p[100];
	cout<<"Enter the no. of elements of the array :";
	cin>>n;
	cout<<"\nEnter the elements of the array :";
	for(i=0;i<n;i++){
		cin>>p[i];	
	}
	a=p;
	for(i=0;i<n;i++){
		for(j=i+1;j<n;j++){
			if(*(a+i)>*(a+j)){
				tmp=*(a+i);
				*(a+i)=*(a+j);
				*(a+j)=tmp;
			}
		}
	}
	cout<<"\nElements after sorting : \n";
	for(i=0;i<n;i++)
	cout<<*(a+i)<<" ";
}
