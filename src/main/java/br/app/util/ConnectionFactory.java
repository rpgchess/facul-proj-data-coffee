package br.app.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {
	public static Connection getConnection() {		
		try {
			
			//Carregando o Driver do MySQL e suas bibliotecas
			//Esta linha poderá causar uma exceção em tempo de compilação 
			//chamada ClassNotFoundException
			Class.forName("com.mysql.jdbc.Driver");
			
			//Definindo os parâmetros de conexão com SGBD e Banco
			String url = "jdbc:mysql://localhost:3306/db_acad";
			String user = "root";
			String pass = "root";
			
			//Estabelecendo e obtendo uma conexão com o Banco de dados
			//Esta linha poderá causar uma exceção em tempo de compilação 
			//chamada SQLException
			return DriverManager.getConnection(url, user, pass);
			
		} catch (Exception e) {
			//Caso uma das duas linhas especificada causem alguma exceção
			//este bloco irá tratar lançando uma exceção em tempo de execução.
			throw new RuntimeException(e.getMessage());
		}
		
	}
}