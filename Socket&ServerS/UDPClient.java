package liujianchun;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class UDPClient {
	public static void main(String[] args) throws IOException {
		//1.定义服务器的地址，端口号，数据
		InetAddress address=InetAddress.getByName("localhost");
		int port=8525;
		byte[] data="用户名：admin;密码：123".getBytes();
		//2.创建数据报，包含发送的数据信息
		DatagramPacket packet=new DatagramPacket(data, data.length, address, port);
		//3.创建DatagramSocket对象
		DatagramSocket socket=new DatagramSocket();
		//4.向服务器发送数据报
		socket.send(packet);
		
		/**
		 * 接收服务器的响应的数据
		 */
		//1.创建数据报，勇于接收服务器端发送的数据
		byte[] newData=new byte[1024];//创建数组用来接收数据
		DatagramPacket newPacket=new DatagramPacket
				(newData, newData.length, packet.getAddress(), packet.getPort());
		//2.接受服务器端响应的数据
		socket.receive(newPacket);
		//3.读取数据
		String reply=new String(newData, 0, newPacket.getLength());
		System.out.println("我是客户端，服务器说："+reply);
		
		//5.关闭资源
		socket.close();
	}
}
