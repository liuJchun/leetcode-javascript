package javaIO;

import java.io.Serializable;

public class Student implements Serializable{
	private String stunu;
	private String stuname;
	//transient 关键字 该元素不会进行jvm默认的序列化 也可以自己完成这个序列化
	private  transient int stuage;
	public Student() {
		
	}
	
	public Student(String stunu, String stuname, int stuage) {
		super();
		this.stunu = stunu;
		this.stuname = stuname;
		this.stuage = stuage;
	}

	public String getStunu() {
		return stunu;
	}
	public void setStunu(String stunu) {
		this.stunu = stunu;
	}
	public String getStuname() {
		return stuname;
	}
	public void setStuname(String stuname) {
		this.stuname = stuname;
	}
	public int getStuage() {
		return stuage;
	}
	public void setStuage(int stuage) {
		this.stuage = stuage;
	}
	@Override
	public String toString() {
		return "Student [stunu=" + stunu + ", stuname=" + stuname + ", stuage=" + stuage + "]";
	}
	/**
	 * 重写源代码（ArrayList）
	 * @param s
	 * @throws java.io.IOException
	 */
	private void writeObject(java.io.ObjectOutputStream s) 
		throws java.io.IOException{
		s.defaultWriteObject();		//把jvm默认的元素进行序列化操作
		s.writeInt(stuage);			//自己完成 stuage 的序列化
	}
	private void readObject(java.io.ObjectInputStream s)
		throws java.io.IOException,ClassNotFoundException{
		s.defaultReadObject();		//把jvm默认的反序列化元素进行反序列化操作
		this.stuage=s.readInt();	//自己完成stuage的反序列化操作
		
	}
	
}
