package liujianchun;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
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
			//2.调用accept()方法开始监听，等待客户端的连接。
			System.out.println("***服务器即将启动，等待客户的连接***");
			Socket socket=serverSocket.accept();
			//3.获取一个输入流，并读取客户端信息
			InputStream is=socket.getInputStream();//字节输入流
			InputStreamReader isr=new InputStreamReader(is);//将字节流包装成字符流
			BufferedReader br=new BufferedReader(isr);//为输入流添加缓冲
			String info=null;
			while((info=br.readLine())!=null) {//循环读取客户端的信息
				System.out.println("我是服务器，客户端说："+info);
			}
			socket.shutdownInput();//关闭输入流
			
			//4.获取输出流，响音客户端的请求
			OutputStream os=socket.getOutputStream();//获取输出流u
			PrintWriter pw=new PrintWriter(os);//将输出流包装成打印流
			pw.write("欢迎你！");
			pw.flush();//刷新缓存调用flush()方法将缓存输出
			socket.shutdownOutput();//关闭输出流
			
			
			//5.关闭资源
			br.close();
			is.close();
			isr.close();
			socket.close();
			serverSocket.close();
			
			pw.close();
			os.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
