# 마이링크 와이어프레임 (Wireframe)

이 문서는 마이링크의 UI 구조를 머메이드(Mermaid) 다이어그램과 아스키(ASCII) 아트를 통해 설명합니다.

---

## 1. 관리자 페이지 (Admin / Editor Page)
관리자 페이지는 좌측의 **편집 섹션**과 우측의 **실시간 미리보기 섹션**으로 구성됩니다.

### 1.1 UI 구조 (Mermaid)
```mermaid
graph TD
    subgraph Admin_Page [관리자 대시보드]
        direction LR
        subgraph Editor_Section [편집 섹션 - Left]
            Header[상단 바: 홈 / 로그아웃]
            ProfileEdit[프로필 인라인 편집: 이름, 소개]
            LinkAdd[링크 추가 버튼]
            LinkList[링크 리스트: 인라인 편집, 삭제, 드래그]
        end
        
        subgraph Preview_Section [실시간 미리보기 - Right]
            direction TB
            PhoneFrame[모바일 프레임]
            PhoneFrame --> PreviewProfile[프로필 정보 미리보기]
            PhoneFrame --> PreviewLinks[링크 버튼들 미리보기]
        end
    end
```

### 1.2 아스키 아트 와이어프레임
```text
################################################################################
#  [Home] [Share]                                             [Logout]         #
################################################################################
#                                                                              #
#  [ 편집 섹션 ]                         [ 실시간 미리보기 ]                   #
#  -----------------------               -----------------------               #
#  |                     |               |    /-------------\  |               #
#  |  Display Name (Edit)|               |    |   (IMAGE)   |  |               #
#  |  Bio (Edit)         |               |    |  Name/Bio   |  |               #
#  |                     |               |    |             |  |               #
#  |  [+ Add Link]       |               |    | [ Link 1 ]  |  |               #
#  |                     |               |    | [ Link 2 ]  |  |               #
#  |  -----------------  |               |    | [ Link 3 ]  |  |               #
#  |  [=] Title (Edit)   |               |    |             |  |               #
#  |      URL (Edit) [X] |               |    \-------------/  |               #
#  |  -----------------  |               -----------------------               #
#  |  [=] Title (Edit)   |                                                     #
#  |      URL (Edit) [X] |                                                     #
#  |  -----------------  |                                                     #
#                                                                              #
################################################################################
```

---

## 2. 사용자 공개 페이지 (User / Public Page)
사용자가 공유된 링크(@displayName)로 접속했을 때 보여지는 화면입니다.

### 2.1 UI 구조 (Mermaid)
```mermaid
graph TD
    subgraph Public_Page [사용자 공개 페이지]
        direction TB
        ProfilePic[프로필 영역 - 중앙 정렬]
        DisplayName[Display Name]
        Bio[한 줄 소개]
        
        subgraph LinkButtons [링크 버튼 리스트]
            Link1[Link Button 1]
            Link2[Link Button 2]
            Link3[Link Button 3]
        end
        
        Footer[마이링크 로고 / 하단 배너]
    end
```

### 2.2 아스키 아트 와이어프레임
```text
---------------------------------------
|                                     |
|                                     |
|               (IMAGE)               |
|            @Display_Name            |
|              Bio Text               |
|                                     |
|       /---------------------\       |
|       |     [Icon] Link 1   |       |
|       \---------------------/       |
|                                     |
|       /---------------------\       |
|       |     [Icon] Link 2   |       |
|       \---------------------/       |
|                                     |
|       /---------------------\       |
|       |     [Icon] Link 3   |       |
|       \---------------------/       |
|                                     |
|                                     |
|             ( My-Link )             |
|                                     |
---------------------------------------
```
