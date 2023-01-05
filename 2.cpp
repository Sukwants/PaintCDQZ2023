#include <iostream>
#include <windows.h>
using namespace std;

char FileName[] = "MYNS.bmp";

#define FILENAME FileName

typedef struct pixColor
{
    unsigned char b;
    unsigned char g;
    unsigned char r;
}PIXCOLOR,*PPIXCOLOR;

int main()
{
    freopen("0.txt","w",stdout);
    BITMAPFILEHEADER bmf;
    BITMAPINFOHEADER bif;
    FILE* pf;
   
    //返回值为0表示打开成功，非0则为失败
    errno_t err = fopen_s(&pf,FILENAME, "rb");
    if (0 == err)
    {
        fread(&bmf, sizeof(bmf), 1, pf);
        fread(&bif, sizeof(bif), 1, pf);

        if (0x4d42 != bmf.bfType)
        {
            fclose(pf);
        }else if (24 != bif.biBitCount)
        {
            fclose(pf);
        }
        else
        {

            PPIXCOLOR* ColorData = new PPIXCOLOR[bif.biHeight];

            //一行的字节数
            int lineCount = bif.biSizeImage / bif.biHeight;

            //存的时候从倒数第一行开始存，所以读的时候先往倒数第一行放
            //读颜色数据
            for (int i = bif.biHeight - 1; i >= 0; i--)
            {
                ColorData[i] = new PIXCOLOR[bif.biWidth];
                fread(ColorData[i], sizeof(PIXCOLOR), bif.biWidth, pf);
                //偏移  bif.biWidth * sizeof(PIXCOLOR)有多少个字节
                fseek(pf, lineCount - bif.biWidth * sizeof(PIXCOLOR), SEEK_CUR);
            }
            fclose(pf);

            fprintf(stderr, "%d %d\n", bif.biHeight, bif.biWidth);
            for (int i = 0; i < bif.biHeight; i++)
            {
                for (int j = 0; j < bif.biWidth; j++)
                {
                    printf("%3d %3d %3d ", ColorData[i][j].r, ColorData[i][j].g, ColorData[i][j].b);
                }
                cout << endl;
                delete[] ColorData[i];
            }
            delete[] ColorData;
            ColorData = nullptr;
        }
    }
    else
    {
        fprintf(stderr, "Error!\n");
    }
    return 0;
}
