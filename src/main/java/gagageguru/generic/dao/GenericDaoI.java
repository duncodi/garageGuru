package gagageguru.generic.dao;

import java.io.Serializable;

import javax.persistence.EntityManager;

public interface GenericDaoI<T, ID extends Serializable> {
	void setEm(EntityManager em);
	
	EntityManager getEm();
	
	T save(T entity);
}
