/*//�±��0��ʼ�������� 
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
#include<iomanip>
int main() {
  int k, t = 4, pn = 43;  //pnΪ����,�����43����
  string a[45] = {"��Сѩ", "����", "л����", "�ž�", "����ƽ", "����", "��־��", "������", "��־��",
                  "۳����", "л����", "�Һ���", "���", "�޽�", "��Сΰ", "��ľ��", "���", "������",
                  "ŷ����", "���ݷ�", "������", "������", "�ܼ���", "��־��", "����", "��С��", "���",
                  "����ǿ", "��ǰ", "����", "ŷ��Դ", "�����", "����", "�δ�", "���", "�����",
                  "��ģ��", "��Ԫ��", "ŷ������", "�׼ѳ�", "�캣��", "������", "���ĺ�", "44", "45"};
  srand(time(0));
  for(int i = 0; i < pn-1; i++) {
    k = rand() % (pn-1-i);  //0~(44-i)�������
    swap(a[k], a[pn-1-i]);
  }
  cout.setf(ios::left);
  cout << "          16" << "        15" << "        14" << "        13" << "        12" << "        11" << "        10" << "        9" << "        8\n��3��   ";
  for(int i = 0; i < pn; i++) {
    cout << setw(10) << a[i];
    if((i+1)%9 == 0) {
      cout << "\n";
      if(i != pn-1) cout << "��" << t++ << "��   ";
    }
  }
}*/
//�±��0��ʼ
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
int main() {
  int k, a[45];  //�����45���� 
  srand(time(0));
  for(int i = 0; i < 45; i++) a[i] = i;  //��45���˷ֱ��Ϊ0-44��
  for(int i = 0; i < 44; i++) {
    k = rand() % (44-i);  //0~(44-i)�������
    swap(a[k], a[44-i]);
  }
  for(int i = 0; i < 45; i++) {
    cout << a[i] << "\t";
    if((i+1)%9 == 0) cout << endl;
  }
}
/*�±��1��ʼ
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
int main() {
  int p, a[50];
  srand(time(0));
  for(int i = 1; i <= 45; i++) a[i] = i;
  for(int i = 1; i <= 44; i++) {
    p = 1+rand() % (45-i);  //1~(45-i)�������
    swap(a[p], a[46-i]);
  }
  for(int i = 1; i <= 45; i++) {
    if((i-1)%9 == 0 && i != 1) cout << endl;
    cout << a[i] << "\t";
  }
}*/
