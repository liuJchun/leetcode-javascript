package javaIO;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class ObjectSerializable {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
	test_Serializable();
	test_UnSerializable();
		
	}
	public static void test_Serializable() throws Exception{
		String file="demo/obj.dat";
		//序列化
		ObjectOutputStream oos=new ObjectOutputStream(new FileOutputStream(file));
		Student st=new Student("10001","庄三",23);
		oos.writeObject(st);
		oos.flush();
		oos.close();
		
	}
	public static void test_UnSerializable() throws Exception{
		//反序列化
		String file="demo/obj.dat";
		ObjectInputStream ois=new ObjectInputStream(new FileInputStream(file));
		Student stu=(Student)ois.readObject();
		System.out.println(stu);
		//System.out.println(ois.readObject());
		ois.close();
	}
}
