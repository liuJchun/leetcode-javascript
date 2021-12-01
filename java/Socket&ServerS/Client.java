package liujianchun;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;

/**
 * 客户端
 * @author Administrator
 *
 */
public class Client {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			//1.创建客户端Socket，指定服务器端地址和端口
			Socket socket=new Socket(InetAddress.getLocalHost(), 8848);
			//2.获取输出流，向服务器端发送信息
			OutputStream os=socket.getOutputStream();//字节输出流
			
			/**
			 * 改：使用TCP通信传输对象，一般不用字符流传输 ，一般用对象流进行操作
					ObjectOutputStream oos=new ObjectOutputStream(os);
					User user=new User("admi","123");
					oos.writeObject(user);
			*/
			PrintWriter pw=new PrintWriter(os);//将输出流包装成打印流
			pw.write("用户名：admin；密码：123");
			pw.flush();
			socket.shutdownOutput();//关闭输出流
			//3.获取一个输入流 来读取服务器的信息
			InputStream is=socket.getInputStream();//获取字节输入流
			InputStreamReader isr=new InputStreamReader(is);//将自字节输入流转换成字符流
			BufferedReader br=new BufferedReader(isr);//为输入流添加缓冲
			String info=null;
			while((info=br.readLine())!=null) {
				System.out.println("我是客户端，服务器说："+info);
			}
			socket.shutdownInput();//关闭输入流
			
			//4..关闭资源
			pw.close();
			os.close();
			socket.close();
			br.close();
			isr.close();
			is.close();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
