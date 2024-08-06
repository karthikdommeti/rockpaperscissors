class Primes
{
    static int primes(int n)
    {
        int count=0;
        for(int i=2;i<n;i++)
        {
            if(n%i==0)
            {
                count=count+1;
            }
        }
        if(count!=0)
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
    public static void main(String[] args) {
        int arr[]=new int[]{12,21,7,43};
        int arr2[]=new int[2];
        int j=0;
        for(int i=0;i<4;i++)
        {
            if(primes(arr[i])==1)
            {
               arr2[j]=arr[i];
               j=j+1; 
            }
        }
        for(int i:arr2)
        {
            System.out.println(i);
        }
    }
}