

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServerSide
 */
@WebServlet("/ServerSide")
public class ServerSide extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Map<String,String> commentList = new HashMap<String,String>() ; 
    /**
     * Default constructor. 
     */
    public ServerSide() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		updateCommentList(request);
		PrintWriter pw = response.getWriter();
		pw.write(request.getParameter("callback")+obj2Json());
		pw.flush();
		pw.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	private void updateCommentList(HttpServletRequest req){
		if(req.getParameter("save")!=null){
			commentList.put(req.getParameter("author"),req.getParameter("comment"));
		}
	}
	private String obj2Json(){
		StringBuilder sb = new StringBuilder("([");
		Iterator<String> ite =  commentList.keySet().iterator();
		while(ite.hasNext()){
			String author = ite.next() ;
			sb.append("{author:'"+author+"',comment:'"+commentList.get(author)+"'},") ;
		}
		if(sb.length()>2)
		sb.deleteCharAt(sb.length()-1);
		sb.append("])");
		return sb.toString();
	}

}
