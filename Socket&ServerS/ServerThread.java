package liujianchun;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

/**
 * 服务器线程处理类
 * @author Administrator
 *
 */
public class ServerThread extends Thread {
	//和线程相关的Socket
	Socket socket=null;
	public ServerThread(Socket socket) {
		this.socket=socket;
	}
	
	//线程执行操作，响应客户端的请求
	@Override
	public void run() {
		// TODO Auto-generated method stub
		
		try {
			//获取一个输入流，并读取客户端信息
			InputStream is=socket.getInputStream();//字节输入流
			InputStreamReader isr=new InputStreamReader(is);//将字节流包装成字符流
			BufferedReader br=new BufferedReader(isr);//为输入流添加缓冲
			String info=null;
			while((info=br.readLine())!=null) {//循环读取客户端的信息
				System.out.println("我是服务器，客户端说："+info);
			}
			socket.shutdownInput();//关闭输入流
			
			//获取输出流，响音客户端的请求
			OutputStream os=socket.getOutputStream();//获取输出流u
			PrintWriter pw=new PrintWriter(os);//将输出流包装成打印流
			pw.write("欢迎你！");
			pw.flush();//刷新缓存调用flush()方法将缓存输出
			socket.shutdownOutput();//关闭输出流
			
			
			//关闭资源
			br.close();
			is.close();
			isr.close();
			pw.close();
			os.close();
			socket.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
}
