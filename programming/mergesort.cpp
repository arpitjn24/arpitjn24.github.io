#include <iostream>
using namespace std;
void mergesort(int a[],int l,int m,int r)
{
	int n1=m-l+1;
	int n2=r-m;
	int x[n1+1],y[n2+1];
	for(int i=0;i<n1;i++)
	x[i]=a[l+i];
	x[n1]=1000;
	for(int i=0;i<n2;i++)
	y[i]=a[m+i+1];
	y[n2]=1000;
	int i=0,j=0,k=l;
	while(i<n1 || j<n2){
		if(x[i]<=y[j])
		{
			a[k]=x[i];
			i++;k++;
		}
		else
		{
			a[k]=y[j];
			k++;j++;
		}
		
	} 
	
}
void merge(int a[],int l,int r)
{//cout<<"merge for "<<l<<"  "<<r<<endl;
if(l>=r)
return;
int mid=(l+r)/2;
merge(a,l,mid);
merge(a,mid+1,r);
mergesort(a,l,mid,r);

	
}

int main() {
	// your code goes here
	int n;
	cin>>n;
	int a[n];
	for(int i=0;i<n;i++)
	cin>>a[i];
	
	merge(a,0,n-1);
		for(int i=0;i<n;i++)
	cout<<a[i]<<" ";
	
	
	return 0;
}
