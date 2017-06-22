//selection sort
#include <iostream>
using namespace std;

int main() {
	int n;
	cin>>n;
	
	int a[n];
	for(int i=0;i<n;i++)
	cin>>a[i]; 
	
	for(int i=0;i<n;i++)
	{int min=11111,flag=0;
		for(int j=i;j<n;j++)
		{
			if(a[j]<min)
			{flag=j;
				min=a[j];
			}
			
		}
		int temp=a[i];
		a[i]=min;
		a[flag]=temp;
	}
	for(int i=0;i<n;i++)
	cout<<a[i]<<" ";
	
	// your code goes here
	return 0;
}
