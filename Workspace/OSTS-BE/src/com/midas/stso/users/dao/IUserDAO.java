/**
 * 
 */
package com.midas.stso.users.dao;

import com.midas.stso.users.po.Users;

/**
 * @author yhh
 *
 */
public interface IUserDAO {
	/**
	 * �û���¼
	 * @param users
	 * @return ��¼�û���Ϣ
	 */
	public Users checkLogin(Users users);
	/**
	 * �û�ע��
	 * @param users
	 * @return �Ƿ�ע��ɹ�
	 */
	public boolean Regist(Users users);
	public 
}
