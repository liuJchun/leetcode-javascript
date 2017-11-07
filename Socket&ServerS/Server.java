
/**
 * 1.注意多线程的优先级
 * 2.注意是否关闭输出流和输入流(对于同一个Socket,如果关闭了输出流，则与该输出关联的Socket也会被关闭，
 * 	  所以一般不用关闭流，直接关闭Socket即可)
 */
package liujianchun;

import java.io.IOException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

/**
 * 实现基于TCP协议的Socket通信，实现用户登录
 * 服务器端
 * @author Administrator
 *
 */
public class Server {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			//1.创建一个服务器端口Socket，即ServerSocket，指定绑定端口，并监听该端口。
			ServerSocket serverSocket=new ServerSocket(8848);
			Socket socket=null;
			//记录连接客户端的数量
			int count=0;
			System.out.println("***服务器即将启动，等待客户的连接***");
			//循环监听 ，等待客户端的连接
			while(true) {
				//2.调用accept()方法开始监听，等待客户端的连接。
				socket=serverSocket.accept();
				//创建一个新的线程
				ServerThread serverThread=new ServerThread(socket);
				serverThread.setPriority(4);//设置线程优先级，范围为[1,10],默认为5
				//启动线程
				serverThread.start();//启动线程
				count++;//统计客户端的数量
				System.out.println("我是服务器，连接的第"+count+"个客户端");
				InetAddress address=socket.getInetAddress();
				System.out.println("当前客户端的IP地址为："+address.getHostAddress());
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
