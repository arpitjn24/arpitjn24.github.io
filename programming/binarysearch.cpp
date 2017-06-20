///binary search

#include <iostream>
using namespace std;
void binarysearch(int a[],int l,int r,int x){
int mid=(l+r)/2;
if(l>r)
{cout<<" element not present\n";
	return;
}
if(a[mid]==x)
{cout<<" element found at pos "<<mid+1<<endl;
return;
}
if(a[mid]<x)
binarysearch(a,mid+1,r,x);
else
binarysearch(a,l,mid-1,x);

	
}
int main() {
	int n,x;
	cout<<" enter nos of element\n";
	cin>>n;
	cout<<" enter elements\n";
	int a[n];
	for(int i=0;i<n;i++)
	cin>>a[i];
	cout<<"enter element to be searched in BINARY SEARCH\n";
	cin>>x;
	binarysearch(a,0,n-1,x);	
	
	
	// your code goes here
	return 0;
}
