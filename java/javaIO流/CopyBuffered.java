package liujianchun;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyBuffered {

		public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		CopyBudderedOutSteam(new File("E:\\Main.java"), new File("E:\\b.txt"));
	}
	/**
	 * 进行文件的拷贝，利用缓冲字节流。
	 * @throws IOException 
	 */
	public static void CopyBudderedOutSteam(File srcFile,File destFile) throws IOException {
		if(!srcFile.exists()) {
			throw new  IllegalArgumentException("文件："+srcFile+"不存在");
		}
		if(!srcFile.isFile()) {
			throw new IllegalArgumentException(srcFile+":不是文件");
		}
		BufferedInputStream bis=new BufferedInputStream(new FileInputStream(srcFile));
		BufferedOutputStream bos=new BufferedOutputStream(new FileOutputStream(destFile));
		int c;
		while((c=bis.read())!=-1) {
			bos.write(c);
			bos.flush();	//刷新缓存区，否则写不到文件中去。
		}
		bis.close();
		bos.close();
	}
}
