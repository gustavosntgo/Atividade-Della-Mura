import java.util.Scanner;
public class Aut {
        int cont;
        char palavra [];
    
    public static void main(String args[]) {
        Aut Automato = new Aut();
        String sentenca;
        Scanner entrada = new Scanner(System.in);
        System.out.println("entre com a sentença: ");
        sentenca = entrada.nextLine();
        Automato.palavra = sentenca.toCharArray();
        Automato.iniciar();
    }
    public void iniciar(){
        cont = 0;
        q0();
    }
    public void q0(){
        if (cont < palavra.length){
            if (palavra[cont] == 'b'){
                cont++;
                q1();
            }else if (palavra[cont] == 'a'){
                qf();
            }else{
                qErro();
            }
        }else{
            qErro();
        }
    }
    public void q1(){
        if (cont < palavra.length){
            if (palavra[cont] == 'c'){
                cont++;
                q2();
            }else{
                qErro();
            }
        }else{
            qErro();
        }
    }   
    public void q2(){
        if (cont < palavra.length){
            if (palavra[cont] == 'b'){
                cont++;
                q0();
            }else{
                qErro();
            }
        }else{
            qErro();
        }
    }
    public void qf(){
        System.err.println("Palavra ACEITA pelo Automato!");
    }
    public void qErro(){
        System.err.println("Palavra REJEITADA pelo Automato!");

    }
}