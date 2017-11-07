package liujianchun;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

/**
 * 服务器端，实现基于UDP的用户登陆
 * @author Administrator
 *
 */
public class UDPServer {
	public static void main(String[] args) throws IOException {
		/**
		 * 接收客户端数据
		 */
		//1.创建服务器端的DatagramSocket，指定端口号
		DatagramSocket socket=new DatagramSocket(8525);
		//2.创建DatagramPacket(数据报)，用于接受客户端发送的数据
		byte[] data=new byte[1024];
		DatagramPacket packet=new DatagramPacket(data, 0, data.length);
		
		//3.接收客户端发送的数据
		System.out.println("***服务器端已经启动，等待客户端发送数据***");
		socket.receive(packet);
		//4.读取数据
		String info=new String(data, 0, packet.getLength());
		System.out.println("我是服务器，客户端说："+info);
		
		/**
		 * 响应客户端数据
		 */
		//1.定义客户端的地址，端口，数据
		InetAddress adress=packet.getAddress();
		int port=packet.getPort();
		byte[] newData="欢迎你！".getBytes();
		//2.创建数据报 包含响应的数据信息
		DatagramPacket newPacket=new DatagramPacket(newData, 0, newData.length, adress, port);
		//3.响应客户端，调用DatagramStocket的send()方法发送。
		socket.send(newPacket);

		//关闭资源
		socket.close();
	}
}
