package liujianchun;

import java.util.ArrayList;
import java.util.Scanner;

public class L1_016_checkID {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner in=new Scanner(System.in);
		ArrayList<String> aList=new ArrayList<String>();
		int n=in.nextInt();
		char[] x= {'1','0','X','9','8','7','6','5','4','3','2'};
		int[] qz= {7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2};
		String[] str=new String[n];
		char[][] c=new char[n][18];
		for(int i=0;i<n;i++) {
			str[i]=in.next();
			c[i]=str[i].toCharArray();
			int sum=0;
			for(int j=0;j<17;j++) {
				try{
					sum+=Integer.parseInt((c[i][j])+"")*qz[j];
				}
				catch(Exception e){
					sum=-1;
					break;
				}
			}
			if(sum==-1) {
				aList.add(str[i]);
			}else {
				sum%=11;
				if(!(x[sum]+"").equals((c[i][17])+"")) {
					aList.add(str[i]);
				}
			}
			
		}
		if(aList.isEmpty()) {
			System.out.println("All passed");
		}
		else {
			for(String ss:aList) {
				System.out.println(ss);
			}
		}
		in.close();
		
	}

}
